---
id: api-reference
title: API Reference
sidebar_position: 1
---

import ApiReference from '@site/src/components/ApiReference';

# Structus API Reference

Complete API documentation for the Structus library.

<ApiReference
  title="Core Aggregates"
  description="Base interfaces and classes for building domain models"
  endpoints={[
    {
      method: "interface",
      path: "AggregateRoot<ID>",
      description: "Base interface for aggregate root entities. All domain model aggregates must implement this interface.",
      parameters: [
        {
          name: "ID",
          type: "Serializable",
          description: "The type of the aggregate's identifier",
          required: true,
        }
      ],
      returns: {
        type: "Entity with event sourcing capabilities",
        description: "Provides methods for managing domain events and state changes"
      },
      example: `data class OrderAggregate(
  override val id: OrderId,
  val items: List<OrderItem> = emptyList(),
  val status: OrderStatus = OrderStatus.PENDING
) : AggregateRoot<OrderId> {
  override fun getUncommittedEvents(): List<DomainEvent> {
    return emptyList()
  }
}`
    },
    {
      method: "interface",
      path: "Entity<ID>",
      description: "Base interface for entities within an aggregate. Entities have identity and lifecycle within aggregates.",
      parameters: [
        {
          name: "ID",
          type: "Serializable",
          description: "The type of the entity's identifier",
          required: true,
        }
      ],
      returns: {
        type: "Entity with value object support",
        description: "Supports composition with value objects for rich domain models"
      }
    },
    {
      method: "class",
      path: "ValueObject",
      description: "Abstract base class for value objects. Value objects have no identity and are immutable.",
      returns: {
        type: "Immutable domain concept",
        description: "Used for modeling concepts like Money, Email, or ProductCode"
      },
      example: `data class Money(
  val amount: BigDecimal,
  val currency: Currency
) : ValueObject() {
  init {
    require(amount >= BigDecimal.ZERO) { "Amount must be non-negative" }
  }
}`
    }
  ]}
/>

<ApiReference
  title="Repository Pattern"
  description="Interfaces for persisting and retrieving aggregates"
  endpoints={[
    {
      method: "interface",
      path: "Repository<T, ID>",
      description: "Base repository interface for storing and retrieving aggregates of type T",
      parameters: [
        {
          name: "T",
          type: "AggregateRoot<ID>",
          description: "The aggregate root type",
          required: true,
        },
        {
          name: "ID",
          type: "Serializable",
          description: "The aggregate's identifier type",
          required: true,
        }
      ],
      returns: {
        type: "Query and persistence operations",
        description: "Provides find, save, and delete operations"
      },
      example: `interface OrderRepository : Repository<OrderAggregate, OrderId> {
  suspend fun findByCustomerId(customerId: CustomerId): List<OrderAggregate>
  suspend fun findRecentOrders(limit: Int): List<OrderAggregate>
}`
    }
  ]}
/>

<ApiReference
  title="Command Handling"
  description="Interfaces for handling commands and business operations"
  endpoints={[
    {
      method: "interface",
      path: "CommandHandler<T, R>",
      description: "Handles a command of type T and returns a result of type R",
      parameters: [
        {
          name: "T",
          type: "Command",
          description: "The command to handle",
          required: true,
        },
        {
          name: "R",
          type: "Any",
          description: "The return type of the command handler",
          required: true,
        }
      ],
      returns: {
        type: "Result<R>",
        description: "Either a successful result or a domain error"
      },
      example: `class CreateOrderCommandHandler(
  private val orderRepository: OrderRepository
) : CommandHandler<CreateOrderCommand, OrderId> {
  override suspend fun handle(command: CreateOrderCommand): OrderId {
    val order = OrderAggregate.create(
      customerId = command.customerId,
      items = command.items
    )
    orderRepository.save(order)
    return order.id
  }
}`
    }
  ]}
/>

## Best Practices

- **Aggregate Design**: Keep aggregates small and focused on a single responsibility
- **Event Sourcing**: Use domain events to capture state changes
- **Repository Contract**: Define repositories per aggregate, not per entity
- **Command Validation**: Validate commands at the handler level
- **Error Handling**: Use result types or exceptions for domain errors

## See Also

- [Architecture Overview](/docs/architecture/overview)
- [Getting Started](/docs/getting-started/quick-start)
- [Advanced Patterns](/docs/advanced/cqrs-implementation)

