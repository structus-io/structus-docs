import React, { useEffect, useRef } from 'react';
import CopyButton from '@site/src/components/CopyButton';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  metastring?: string;
}

export default function CodeBlockWrapper(props: Props) {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find all code blocks and add copy buttons if not already present
    const codeBlocks = codeRef.current?.querySelectorAll('pre code');
    codeBlocks?.forEach((block) => {
      if (!block.parentElement?.querySelector('[data-copy-button]')) {
        const text = block.textContent || '';
        const button = document.createElement('button');
        button.setAttribute('data-copy-button', 'true');
        button.className = styles.copyBtn;
        button.innerHTML = '📋 Copy';
        button.onclick = async () => {
          try {
            await navigator.clipboard.writeText(text);
            button.innerHTML = '✓ Copied!';
            setTimeout(() => {
              button.innerHTML = '📋 Copy';
            }, 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        };
        block.parentElement?.style.setProperty('position', 'relative');
        block.parentElement?.appendChild(button);
      }
    });
  }, []);

  return (
    <div ref={codeRef} className={styles.codeBlockContainer}>
      {props.children}
    </div>
  );
}

