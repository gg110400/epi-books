import '../components/Welcome'


test ('controllo che il componente venga montato correttamente', () => {

render (<Welcome></Welcome>);
const WelcomeText=screen.getByText(/Welcome to Giuls's Magic Library/i);
expect(WelcomeText).toBeInTheDocument();

})

