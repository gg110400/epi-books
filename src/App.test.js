import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Welcome from "./components/Welcome";


//ES 1 test superato
test("controllo che il componente venga montato correttamente", () => {
  render(<Welcome></Welcome>);
  const WelcomeText = screen.getByText(/Welcome to Giuls's Magic Library/i);
  expect(WelcomeText).toBeInTheDocument();
});

//ES 2 test superato
test("controllo che ci siano sullo schermo tante card quanto quelle contenute in fantasy", () => {
  render(<App />);

  const cards = screen.getAllByTestId("card");

  // Verifica che il numero di card renderizzate sia uguale a 150
  expect(cards).toHaveLength(150);
});

//ES 3 test superato
//
test("verificare che il componente commentArea venga montato correttamente", () => {
  render(<App></App>);

  // Trova gli elementi per test ID
  const recensione = screen.getByTestId("recensione");
  const valutazione = screen.getByTestId("valutazione");
  const addButton = screen.getAllByTestId("bottone-aggiungi");
  const listaCommenti = screen.getByTestId("lista-commenti");

  // Verifica che gli elementi siano nel documento
  expect(recensione).toBeInTheDocument();
  expect(valutazione).toBeInTheDocument();

  // Verifica che almeno un bottone aggiungi sia presente
  expect(addButton.length).toBeGreaterThan(0);

  expect(listaCommenti).toBeInTheDocument();
});

//ES 4
//test superato
test("verifico che funzioni il filtro dei libri", () => {
  render(<App></App>);
  const casellaDiRicerca = screen.getByPlaceholderText("Cerca un libro...");
  fireEvent.change(casellaDiRicerca, { target: { value: "destiny" } });
  const elementiFiltrati = screen.getAllByTestId("card");
  expect(elementiFiltrati).toHaveLength(3);
});

//ES 5 test superato
test("Verifico che cliccando su un libro il bordo diventi rosso", () => {
  render(<App></App>);
  const cards = screen.queryAllByTestId("libro");
  fireEvent.click(cards[0]);
  expect(cards[0]).toHaveStyle("border: 2px solid red");
});

//ES 6 test superato
test("Verifico che cliccando su un secondo libro dopo il primo il bordo del primo torni normale", () => {
  render(<App></App>);
  // Trova tutte le card
  const cards = screen.queryAllByTestId("libro");
  const firstBook = cards[0];
  const secondBook = cards[1];

  // Clicca sul primo libro e verifica il bordo
  fireEvent.click(firstBook);
  expect(firstBook).toHaveStyle("border: 2px solid red");

  // Clicca sul secondo libro e verifica i bordi
  fireEvent.click(secondBook);
  expect(secondBook).toHaveStyle("border: 2px solid red");
  expect(firstBook).toHaveStyle("border: none"); // Assumendo che il bordo normale sia 'none'
});

//ES 7 test superato
//HO SPOSTATO NUOVAMENTE LE RECENSIONI IN ALL THE BOOKS PER POTER FARE QUESTO TEST
test("Verifico che all'avvio della pagina, senza aver cliccato su nessun libro, non ci siano istanze di singleComment", () => {
  render(<App></App>);
  // Usa queryAllByTestId per verificare che non ci siano commenti
  const comments = screen.queryAllByTestId("commento");
  expect(comments).toHaveLength(0);
});

//ES 8  test superato
test("Verifico che cliccando su un libro le recensioni vengano caricate correttamente", async () => {
  render(<App />);
  const cards = screen.queryAllByTestId("libro");
  fireEvent.click(cards[0]);

  const commenti = await waitFor(() => screen.getByTestId("lista-commenti"));
  expect(commenti).toBeInTheDocument();

});
