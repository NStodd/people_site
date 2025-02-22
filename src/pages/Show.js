import { Form, useLoaderData } from "react-router-dom";


function Show(props) {
    const person = useLoaderData()
    
    return (
        <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image}  alt={person.name}/>

            <h2>Update {person.name}</h2>
            {/* has access to "._id" because the object from the api is available */}
            <Form action={`/update/${person._id}`} method="post">
                <input defaultValue={person.name} type="input" name="name" placeholder="person's name"/>
                <input defaultValue={person.image} type="input" name="image" placeholder="person's picture"/>
                <input defaultValue={person.title} type="input" name="title" placeholder="person's title"/>
                <input type="submit" value={`update ${person.name}`} />
            </Form>

            <h2>Delete {person.name}</h2>
            <Form action={`/delete/${person._id}`} method="delete">
                <input type="submit" value={`delete ${person.name}`} />
            </Form>

        </div>
    )
}

export default Show;
