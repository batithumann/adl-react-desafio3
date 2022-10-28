import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

const Formulario = ({ colaboradoresIniciales }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [colaboradores, setColaboradores] = useState(colaboradoresIniciales);
  const [contador, setContador] = useState(4);
  const [filtro, setFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setColaboradores([
      ...colaboradores,
      { id: contador, nombre: nombre, correo: correo },
    ]);
    setNombre("");
    setCorreo("");
    setContador(contador + 1);
  };

  const handleNameChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container-fluid">
          <Navbar.Brand>Buscador de colaboradores</Navbar.Brand>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Busca un colaborador"
              className="me-2"
              aria-label="Search"
              value={filtro}
              onChange={handleFilterChange}
            />
          </Form>
        </div>
      </Navbar>

      <div className="container-fluid">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del colaborador</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre del colaborador"
              name="nombre"
              value={nombre}
              onChange={handleNameChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Correo del colaborador</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa correo del colaborador"
              name="correo"
              value={correo}
              onChange={handleEmailChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Agregar colaborador
          </Button>
        </Form>

        <ListGroup variant="flush">
          {colaboradores
            .filter((colaborador) => {
              return (
                colaborador.nombre.includes(filtro) ||
                colaborador.correo.includes(filtro)
              );
            })
            .map((colaborador) => (
              <ListGroup.Item key={colaborador.id}>
                {colaborador.nombre} - {colaborador.correo}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </>
  );
};

export default Formulario;
