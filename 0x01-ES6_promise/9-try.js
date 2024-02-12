<<<<<<< HEAD
/* eslint-disable */
=======
>>>>>>> alx-frontend-javascript/main
export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
<<<<<<< HEAD
    queue.push("Guardrail was processed");
=======
    queue.push('Guardrail was processed');
>>>>>>> alx-frontend-javascript/main
  }
  return queue;
}
