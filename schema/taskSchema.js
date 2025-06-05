const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  input TaskInput {
    title: String!
    completed: Boolean
  }

  type Query {
    getTasks: [Task]
  }

  type Mutation {
    createTask(input: TaskInput): Task
    updateTask(id: ID!, input: TaskInput): Task
    deleteTask(id: ID!): String
  }
`);
