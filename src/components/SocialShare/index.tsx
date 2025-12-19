import React from 'react';
import styles from './styles.module.css';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

export default function SocialShare({ title, url, description }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description || title);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
  };

  return (
    <div className={styles.socialShare}>
      <span className={styles.label}>Share this article:</span>
      <div className={styles.buttons}>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          title="Share on Twitter/X"
          aria-label="Share on Twitter"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          title="Share on LinkedIn"
          aria-label="Share on LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.61 2.922-1.61 2.135 0 3.735 1.394 3.735 4.391v5.59zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.915-1.704 1.144 0 1.915.753 1.915 1.704 0 .946-.771 1.704-1.915 1.704zm1.589 11.597H3.75V9.557h3.176v10.895zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          title="Share on Facebook"
          aria-label="Share on Facebook"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
        <a
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          title="Share on Reddit"
          aria-label="Share on Reddit"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.385 4.859-7.181 4.859-3.796 0-7.182-2.165-7.182-4.858 0-.184.007-.366.019-.545a1.75 1.75 0 0 1-1.010-1.614c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.53l.531-2.607a1.75 1.75 0 0 1 2.125-1.384l1.673.372a1.754 1.754 0 0 1 1.251-2.429c.687 0 1.25.56 1.25 1.249zm-5.764 4.953c-.168 0-.334.044-.475.135-.145.088-.27.2-.364.338-.094.138-.15.301-.15.468 0 .433.294.788.678.788.379 0 .685-.355.685-.789 0-.167-.056-.33-.15-.468a.975.975 0 0 0-.364-.338.95.95 0 0 0-.475-.135zm3.23 1.196c-.098-.088-.21-.16-.338-.213a1.201 1.201 0 0 0-.814 0 .99.99 0 0 0-.338.213.97.97 0 0 0-.213.338 1.05 1.05 0 0 0 0 .814c.05.118.122.227.213.338.088.098.2.17.338.213.26.098.554.098.814 0 .138-.043.25-.115.338-.213.091-.111.163-.22.213-.338a1.05 1.05 0 0 0 0-.814.97.97 0 0 0-.213-.338zm2.27-1.196c-.167 0-.334.044-.475.135a.975.975 0 0 0-.364.338c-.094.138-.149.301-.149.468 0 .433.294.788.677.788.379 0 .686-.355.686-.789 0-.167-.056-.33-.15-.468a.975.975 0 0 0-.364-.338.95.95 0 0 0-.475-.135zm5.604 5.209c0 .563-.451 1.01-1.01 1.01-.561 0-1.01-.447-1.01-1.01 0-.562.449-1.009 1.01-1.009.56 0 1.01.447 1.01 1.009zm-12.042.56c.561 0 1.01.447 1.01 1.009s-.449 1.01-1.01 1.01c-.563 0-1.009-.448-1.009-1.01.001-.562.446-1.009 1.009-1.009z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

