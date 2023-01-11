import { redirect } from "react-router-dom";

// needs the api url for fetch functions
const URL = "https://people-api-ssit.onrender.com";

// create function to be run when creating a new person, accepting new person form data
export const createAction = async ({ request }) => {
    // get data from the form
    const formData = await request.formData();
    // set up a new person to match the person schema
    const newPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title"),
    };
    // send person to the API
    await fetch(URL + "/people", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
    });
    // redirect to index
    return redirect("/");
};

// action function to be run when the update route is hit (with an appropriate id param)
export const updateAction = async ({request, params}) => {
    // get data from form
    const formData = await request.formData()

    // set up the new version of the person
    const updatedPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title"),
    }

    // send new person to our API
    await fetch(URL + "/people/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPerson)
    })

    // redirect to new version of person
    return redirect(`/`)
}

// delete function to be run when the delete route is hit (with an appropriate id param)
export const deleteAction = async ({params}) => {
    // delete person with API
    await fetch (URL + "/people/" + params.id, {
        method: "delete"
    })

    // redirect to index
    return redirect("/")
}