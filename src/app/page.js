import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <Image
        src="/globe.svg" // Path to the image (e.g., in the public folder)
        alt="A beautiful example"
        width={500} // Desired width of the image
        height={400} // Desired height of the image
        className="rounded-lg shadow-md"
      />
      <p className="mt-4 text-lg">Discover amazing features and explore now.</p>
      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg">
        Get Started
      </button>
    </main>
  );
}
