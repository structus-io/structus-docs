---
id: changelog
title: Changelog
sidebar_position: 2
---

import Changelog from '@site/src/components/Changelog';

# Structus Changelog

All notable changes to the Structus library are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

<Changelog entries={[
  {
    version: "0.1.0",
    date: "2025-12-19",
    status: "released",
    changes: [
      {
        type: "added",
        description: "Initial release of Structus library with core components"
      },
      {
        type: "added",
        description: "AggregateRoot base interface for domain-driven design"
      },
      {
        type: "added",
        description: "Entity and ValueObject base classes"
      },
      {
        type: "added",
        description: "Repository pattern support with suspend functions"
      },
      {
        type: "added",
        description: "Command and Query handler interfaces"
      },
      {
        type: "added",
        description: "Event sourcing support with DomainEvent base class"
      },
      {
        type: "added",
        description: "Result type for functional error handling"
      },
      {
        type: "added",
        description: "Complete Kotlin coroutines integration"
      },
      {
        type: "added",
        description: "Comprehensive documentation and quick start guide"
      },
      {
        type: "added",
        description: "Spring Boot and Ktor integration examples"
      }
    ]
  },
  {
    version: "0.2.0",
    date: "2025-12-20",
    status: "unreleased",
    changes: [
      {
        type: "added",
        description: "Transactional outbox pattern implementation for reliable event publishing"
      },
      {
        type: "added",
        description: "Saga pattern support for long-running transactions"
      },
      {
        type: "added",
        description: "Projection builder for CQRS read models"
      },
      {
        type: "changed",
        description: "Repository interface now supports batching operations"
      },
      {
        type: "added",
        description: "Specification pattern for complex queries"
      },
      {
        type: "fixed",
        description: "Coroutine context propagation in event handlers"
      }
    ]
  },
  {
    version: "0.3.0",
    date: "2026-03-15",
    status: "unreleased",
    changes: [
      {
        type: "added",
        description: "Multi-tenancy support for enterprise applications"
      },
      {
        type: "added",
        description: "Audit trail functionality for compliance requirements"
      },
      {
        type: "changed",
        breaking: true,
        description: "AggregateRoot interface signature updated for better type safety"
      },
      {
        type: "added",
        description: "Performance optimizations for large aggregate trees"
      },
      {
        type: "added",
        description: "Testing utilities for aggregate testing"
      },
      {
        type: "deprecated",
        description: "Legacy Repository interface - use Repository<T, ID> instead"
      }
    ]
  }
]} />

## Upgrade Guide

### From 0.1.0 to 0.2.0
No breaking changes. New features are backward compatible.

### From 0.2.0 to 0.3.0
**Breaking Changes:**
- `AggregateRoot` interface signature has changed
- Update your aggregate implementations to use the new type parameters

See [Migration Guide](/docs/migration-guide) for detailed upgrade instructions.

## Version Support

- **Latest**: 0.3.0 (unreleased)
- **Current**: 0.1.0 (released)
- **LTS**: 0.1.x series

Structus follows semantic versioning. For more information, see [semver.org](https://semver.org/).

## Previous Releases

See the [GitHub Releases](https://github.com/structus-io/structus/releases) page for complete release notes and downloadable artifacts.

## Reporting Issues

Found a bug? Please report it on [GitHub Issues](https://github.com/structus-io/structus/issues).

## Contributing

Interested in contributing? Check out our [Contributing Guide](https://github.com/structus-io/structus/blob/main/CONTRIBUTING.md).

