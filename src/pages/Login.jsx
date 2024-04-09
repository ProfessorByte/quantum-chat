import styles from "./Login.module.css";

export const Login = () => {
  return (
    <section className={styles.sectionLogin}>
      <form>
        <h1 className={styles.title}>Quantum Chat</h1>
        <div className={styles.formField}>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  );
};
