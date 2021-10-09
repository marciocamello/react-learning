import Form from "./components/common/FormGroup/Form/input";
import Input from "./components/common/FormGroup/Input/input";
import Select from "./components/common/FormGroup/Select";
import Textarea from "./components/common/FormGroup/Textarea";

function App() {

    const options = [
        {
            value: 1,
            label: "First Option",
        },
        {
            value: 2,
            label: "Second Option",
        }
    ];

    return (
        <div className="App">
            <h1>My Application</h1>
            <Form>
                <Input
                    name="first_name"
                    label="First Name"
                />
                <Select
                    name="tasks"
                    label="Tasks"
                    options={options}
                />
                <Textarea
                    name="description"
                    label="Decription"
                ></Textarea>
            </Form>
        </div>
    );
}

export default App;
