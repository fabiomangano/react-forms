export default function ControlledForm() {
  let formRef;

  const onSubmit = (event) => {
    event.preventDefault();
    formRef.reset();
  };

  return (
    <form
      ref={(el) => (formRef = el)}
      style={{ display: "flex", flexDirection: "column", maxWidth: "20%" }}
      onSubmit={onSubmit}
    >
      <label htmlFor="name">Nome: </label>
      <input type="text" name="name" placeholder="Mario" />
      <br />
      <label htmlFor="surname">Surname: </label>
      <input type="text" name="surname" placeholder="Rossi" />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
