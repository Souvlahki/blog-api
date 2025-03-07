export async function loginUser(data) {
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = response.json();

    return result;
  } catch (err) {
    console.error(err);
    return { error: "Network error, try again later" };
  }
}

export async function signInUser(data) {
  try {
    const response = await fetch("http://localhost:3000/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    return { errors: ["Network error, please try again later."] };
  }
}
