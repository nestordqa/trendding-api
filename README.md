Para acceder a la documentacion, se puede acceder a la ruta:
http://localhost:3000/api/docs

Para correr la app ejecutar en consola: npm run start

Para poder acceder a las rutas distintas a '/login',
debe generarse el JWT a traves del login.
Recibe por body un objecto como el siguiente:
    {
        "pass_usu": "may4",
        "ema_usu": "anakinskywalker@jedis.com"
    }
    PD: Este es el usuario seteado desde ya en la DB para acceder como admin.
    Una vez obtenido el JWT se puede acceder a todas las rutas menos a aquellas que realicen un DELETE o POST, 
    todo esto se valida atraves de un middleware que evaluda el role de usuario contenido en el JWT.
QUERY PARA CREAR LA TABLA DE LA DB:
CREATE TABLE users (
    role user_role NOT NULL,
    ced_usu INT NOT NULL,
    nom_usu VARCHAR(255) NOT NULL,
    ape_usu VARCHAR(255) NOT NULL,
    ema_usu VARCHAR(255) NOT NULL,
    pass_usu VARCHAR(255) DEFAULT 'default',
    add_usu VARCHAR(255),
    pho_usu BIGINT,
    bir_usu DATE,
    vac_usu BOOLEAN DEFAULT FALSE,
    vac_tip_usu VARCHAR CHECK (vac_tip_usu IN ('Sputnik', 'AstraZeneca', 'Pfizer', 'Jhonson&Jhonson')),
    fec_vac_usu DATE,
    num_dos_vac_usu SMALLINT,
    PRIMARY KEY (ced_usu),
    UNIQUE (ema_usu)
);

La base de datos se encuentra desplegada en Vercel.