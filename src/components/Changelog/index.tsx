import React, { useState } from 'react';
import styles from './styles.module.css';

export interface ChangelogEntry {
  version: string;
  date: string;
  status?: 'released' | 'unreleased' | 'deprecated';
  changes: Array<{
    type: 'added' | 'changed' | 'fixed' | 'removed' | 'deprecated' | 'security';
    description: string;
    breaking?: boolean;
  }>;
}

interface ChangelogProps {
  title?: string;
  entries: ChangelogEntry[];
}

export default function Changelog({
  title = 'Changelog',
  entries,
}: ChangelogProps) {
  const [expandedVersions, setExpandedVersions] = useState<Set<string>>(
    new Set([entries[0]?.version])
  );

  const toggleVersion = (version: string) => {
    const newExpanded = new Set(expandedVersions);
    if (newExpanded.has(version)) {
      newExpanded.delete(version);
    } else {
      newExpanded.add(version);
    }
    setExpandedVersions(newExpanded);
  };

  const getChangeTypeColor = (type: string) => {
    switch (type) {
      case 'added':
        return styles.added;
      case 'changed':
        return styles.changed;
      case 'fixed':
        return styles.fixed;
      case 'removed':
        return styles.removed;
      case 'deprecated':
        return styles.deprecated;
      case 'security':
        return styles.security;
      default:
        return styles.default;
    }
  };

  const getStatusBadge = (status?: string) => {
    switch (status) {
      case 'released':
        return <span className={styles.statusBadge + ' ' + styles.released}>Released</span>;
      case 'unreleased':
        return <span className={styles.statusBadge + ' ' + styles.unreleased}>Unreleased</span>;
      case 'deprecated':
        return <span className={styles.statusBadge + ' ' + styles.deprecatedBadge}>Deprecated</span>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.changelog}>
      <h2>{title}</h2>
      <div className={styles.entries}>
        {entries.map((entry) => (
          <div key={entry.version} className={styles.entry}>
            <div
              className={styles.versionHeader}
              onClick={() => toggleVersion(entry.version)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  toggleVersion(entry.version);
                }
              }}
            >
              <div className={styles.versionInfo}>
                <h3 className={styles.version}>
                  {expandedVersions.has(entry.version) ? '▼' : '▶'} v{entry.version}
                </h3>
                <time className={styles.date}>{entry.date}</time>
                {getStatusBadge(entry.status)}
              </div>
            </div>

            {expandedVersions.has(entry.version) && (
              <div className={styles.changes}>
                {entry.changes.map((change, idx) => (
                  <div key={idx} className={styles.change}>
                    <span className={`${styles.type} ${getChangeTypeColor(change.type)}`}>
                      {change.type.toUpperCase()}
                      {change.breaking && <span className={styles.breaking}>BREAKING</span>}
                    </span>
                    <p className={styles.description}>{change.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

