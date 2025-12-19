import React from 'react';
import styles from './styles.module.css';

export interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
  parameters?: Array<{
    name: string;
    type: string;
    description: string;
    required?: boolean;
  }>;
  returns?: {
    type: string;
    description: string;
  };
  example?: string;
}

interface ApiReferenceProps {
  title?: string;
  description?: string;
  endpoints: ApiEndpoint[];
}

export default function ApiReference({
  title = 'API Reference',
  description,
  endpoints,
}: ApiReferenceProps) {
  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case 'GET':
        return styles.get;
      case 'POST':
        return styles.post;
      case 'PUT':
        return styles.put;
      case 'DELETE':
        return styles.delete;
      case 'PATCH':
        return styles.patch;
      default:
        return styles.default;
    }
  };

  return (
    <div className={styles.apiReference}>
      <h2>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.endpoints}>
        {endpoints.map((endpoint, idx) => (
          <div key={idx} className={styles.endpoint}>
            <div className={styles.header}>
              <span className={`${styles.method} ${getMethodColor(endpoint.method)}`}>
                {endpoint.method.toUpperCase()}
              </span>
              <code className={styles.path}>{endpoint.path}</code>
            </div>

            <p className={styles.endpointDescription}>{endpoint.description}</p>

            {endpoint.parameters && endpoint.parameters.length > 0 && (
              <div className={styles.section}>
                <h4>Parameters</h4>
                <div className={styles.parameters}>
                  {endpoint.parameters.map((param, paramIdx) => (
                    <div key={paramIdx} className={styles.parameter}>
                      <div className={styles.paramName}>
                        <code>{param.name}</code>
                        <span className={styles.paramType}>{param.type}</span>
                        {param.required && (
                          <span className={styles.required}>required</span>
                        )}
                      </div>
                      <p>{param.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {endpoint.returns && (
              <div className={styles.section}>
                <h4>Returns</h4>
                <div className={styles.returns}>
                  <p>
                    <strong>Type:</strong> <code>{endpoint.returns.type}</code>
                  </p>
                  <p>{endpoint.returns.description}</p>
                </div>
              </div>
            )}

            {endpoint.example && (
              <div className={styles.section}>
                <h4>Example</h4>
                <pre className={styles.example}>
                  <code>{endpoint.example}</code>
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

