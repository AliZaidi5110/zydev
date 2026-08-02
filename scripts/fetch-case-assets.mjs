const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const outDir = path.join("public", "images", "case-studies");
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  { key: "servipro", url: "https://www.servipro.co.uk/" },
  { key: "loft", url: "https://www.loftaesthetics.co.uk/" },
  { key: "eva", url: "https://www.evahair.co.uk/" },
  { key: "ucbs", url: "https://www.ucbsltd.co.uk/" },
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(
      url,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          accept: "text/html",
        },
      },
      (res) => {
        if (
          res.statusCode >= 300 &&
          res.statusCode < 400 &&
          res.headers.location
        ) {
          fetchText(new URL(res.headers.location, url).toString())
            .then(resolve)
            .catch(reject);
          return;
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve({ html: data, finalUrl: url }));
      },
    );
    req.on("error", reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    const file = fs.createWriteStream(dest);
    const req = lib.get(url, { headers: { "user-agent": "Mozilla/5.0" } }, (res) => {
      if (
        res.statusCode >= 300 &&
        res.statusCode < 400 &&
        res.headers.location
      ) {
        file.close();
        fs.unlinkSync(dest);
        download(new URL(res.headers.location, url).toString(), dest)
          .then(resolve)
          .catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => file.close(() => resolve(dest)));
    });
    req.on("error", reject);
  });
}

function extractOgImage(html, base) {
  const patterns = [
    /property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
    /property=["']og:image:secure_url["'][^>]*content=["']([^"']+)["']/i,
    /rel=["']image_src["'][^>]*href=["']([^"']+)["']/i,
    /itemprop=["']image["'][^>]*content=["']([^"']+)["']/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m?.[1]) return new URL(m[1], base).toString();
  }
  const imgs = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map((m) =>
    new URL(m[1], base).toString(),
  );
  return imgs.find((u) => /\.(png|jpe?g|webp)(\?|$)/i.test(u)) || null;
}

(async () => {
  for (const site of sites) {
    try {
      const { html, finalUrl } = await fetchText(site.url);
      const og = extractOgImage(html, finalUrl);
      console.log(site.key, "og:", og || "none");
      if (!og) continue;
      const ext = path.extname(new URL(og).pathname) || ".png";
      const dest = path.join(outDir, `${site.key}-asset${ext}`);
      await download(og, dest);
      console.log("saved", dest);
    } catch (err) {
      console.error(site.key, err.message);
    }
  }
})();
