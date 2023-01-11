import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";

function Index(props) {
    const people = useLoaderData();
    const [image, setImage] = React.useState('');
    return (
        <div>
            <h2>Create a person</h2>
            <Form
                onSubmit={(event) => {
                    setImage('')
                }}
                action="/create"
                method="post"
            >
                <input type="input" name="name" placeholder="person's name" />
                <input
                    type="text"
                    name="image"
                    placeholder="person's picture"
                    value={image}
                    onChange={e => {
                        setImage(e.target.value)
                    }}
                />
                <input type="input" name="title" placeholder="person's title" />

                <input type="submit" value="create person" />
            </Form>

            <h2>People</h2>
            <div className="container">
                {people.map((person) => (
                    <div className="card" key={person._id}>
                        <Link to={`/${person._id}`} className="person">
                            <h1>{person.name}</h1>
                        </Link>
                        <img src={person.image} alt={person.name} />
                        <h3>{person.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;
