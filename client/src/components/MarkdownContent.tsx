import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

export default function MarkdownContent({ content, className = "" }: MarkdownContentProps) {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base leading-relaxed mb-4 text-foreground/90" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside space-y-2 ml-4 mb-4" {...props} />
          ),
          li: ({ node, ...props }) => (
            <li className="text-foreground/90" {...props} />
          ),
          code: ({ node, inline, ...props }: any) => {
            if (inline) {
              return (
                <code className="bg-muted/50 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
              );
            }
            return (
              <code className="block bg-muted/50 p-4 rounded-md overflow-x-auto text-sm font-mono" {...props} />
            );
          },
          pre: ({ node, ...props }) => (
            <pre className="bg-muted/50 p-4 rounded-md overflow-x-auto mb-4" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary/50 pl-4 italic my-4 text-foreground/80" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a className="text-primary hover:underline" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-bold text-foreground" {...props} />
          ),
          em: ({ node, ...props }) => (
            <em className="italic" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

