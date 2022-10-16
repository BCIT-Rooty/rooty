import LoginForm from "./index.js";


export default { // storybook requires a default export which tells it which component to render
    title: "LoginForm",
    component: LoginForm,
};

export const Default = () => <LoginForm />; // any exports will be stories within storybook
export const Test = () => <LoginForm />;
// export const WithOnLogin = () => <LoginForm onLogin={(email, password) => console.log(email, password)} />; // Example