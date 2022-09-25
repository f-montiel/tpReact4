import ListadoTareas from "./ListadoTareas";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
function FormularioTareas(){
    let [tarea, setTarea] = useState("");
    let [listadoTareas, setListadoTareas] = useState([]);
    let handleSubmit = (e)=>{
        e.preventDefault();
        setListadoTareas([...listadoTareas, tarea]);
    }
    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Ingresa tus tareas</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu tarea" onChange={(e)=>setTarea(e.target.value)}></Form.Control>
                    <Button className="my-3">Agregar</Button>
                </Form.Group>
            </form>
            <ListadoTareas></ListadoTareas>
        </Container>
    );
}
export default FormularioTareas;