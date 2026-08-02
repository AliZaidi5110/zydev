function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function sanitizeHref(href: string) {
  const trimmed = href.trim();
  if (/^(https?:|mailto:|\/|#)/i.test(trimmed)) return trimmed;
  return "#";
}

function inlineFormat(text: string) {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => {
      const safeHref = sanitizeHref(String(href));
      return `<a href="${escapeHtml(safeHref)}">${label}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let listType: "ul" | "ol" | null = null;

  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = null;
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      closeList();
      html.push(`<h2>${inlineFormat(trimmed.slice(3))}</h2>`);
      continue;
    }

    if (trimmed.startsWith("### ")) {
      closeList();
      html.push(`<h3>${inlineFormat(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      if (listType !== "ul") {
        closeList();
        html.push("<ul>");
        listType = "ul";
      }
      html.push(`<li>${inlineFormat(trimmed.slice(2))}</li>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      if (listType !== "ol") {
        closeList();
        html.push("<ol>");
        listType = "ol";
      }
      html.push(`<li>${inlineFormat(trimmed.replace(/^\d+\.\s+/, ""))}</li>`);
      continue;
    }

    closeList();
    html.push(`<p>${inlineFormat(trimmed)}</p>`);
  }

  closeList();
  return html.join("\n");
}

export function Markdown({ content }: { content: string }) {
  return (
    <div
      className="prose-zydev"
      dangerouslySetInnerHTML={{ __html: markdownToHtml(content) }}
    />
  );
}
