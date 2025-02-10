import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function UserServer() {
  try {
    // Fetch users from the database
    const users = await prisma.user.findMany();

    // Return the JSX
    return (
      <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        <h1>User List</h1>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <strong>{user.name}</strong> - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    );
  } catch (error) {
    // If there's an error, handle it and return a message
    return (
      <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        <h1>Error Fetching Users</h1>
        <p>There was an error fetching users. Please try again later.</p>
      </div>
    );
  }
}
