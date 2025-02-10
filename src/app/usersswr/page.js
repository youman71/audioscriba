'use client'
import useSWR from "swr";// Ensure correct import for v2+

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function UsersPage() {
  const { data, error } = useSWR("/api/users", fetcher);

  if (error) return <p>Error loading users</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}<>"               "</>{user.email}</li>
          
        ))}
      </ul>
    </div>
  );
}
