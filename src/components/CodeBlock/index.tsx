import React from 'react';
import CopyButton from '../CopyButton';
import styles from './styles.module.css';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  language?: string;
  metastring?: string;
}

export default function CodeBlock({
  children,
  className = '',
  language = 'text',
}: CodeBlockProps) {
  const codeText = typeof children === 'string' ? children : String(children || '');
  const lang = className.replace(/language-/, '') || language;

  return (
    <div className={styles.codeBlockWrapper}>
      <CopyButton code={codeText} />
      <pre className={`${className} ${styles.preWrapper}`}>
        <code className={`language-${lang}`}>{children}</code>
      </pre>
    </div>
  );
}

