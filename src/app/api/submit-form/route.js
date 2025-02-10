import prisma from "@/app/lib/prisma";

export async function POST(req) {
  try {
    // Parse the JSON body of the request
    const { name, email } = await req.json();

    // Validate that name and email are provided
    if (!name || !email) {
      return new Response(
        JSON.stringify({ message: "Name and email are required" }),
        { status: 400 }
      );
    }

    // Save the form data to the database using Prisma
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    // Return a successful response
    return new Response(
      JSON.stringify({
        message: "Form submitted successfully",
        user: newUser,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    // Ensure a response is returned in case of error
    return new Response(
      JSON.stringify({ message: "Error handling form submission" }),
      { status: 500 }
    );
  }
}