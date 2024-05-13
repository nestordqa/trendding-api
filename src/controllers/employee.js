const { queryDB } = require("../config/config");
const { validateString, validateEmail, validateNumber, compare } = require("../utils/validators");

// Get employees method
exports.getEmployees = async (req, res) => {
    try {
        const user = await queryDB(`
            SELECT * FROM users WHERE role = 'EMPLOYEE'
        `);
        if (!user || !user.rows || !user.rows.length) res.status(204).json({ error: 'No hay empleados en la base de datos' });
        res.json(user.rows);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get employees by cedula method
exports.getEmployeesByCedula = async (req, res) => {
    try {
        const ced_usu = req.params['ced_usu'];
        const user = await queryDB(`
            SELECT * FROM users WHERE role = 'EMPLOYEE' AND ced_usu = '${ced_usu}'
        `);
        if (!user || !user.rows || !user.rows.length) res.status(204).json({ error: 'No existe el empleado en al base de datos' });
        res.json(user.rows);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update employee info general
exports.updateEmployee = async (req, res) => {
    try {
        const ced_usu = req.params['ced_usu'];
        const user = await queryDB(`
            SELECT * FROM users WHERE role = 'EMPLOYEE' AND ced_usu = '${ced_usu}'
        `);
        if (!user || !user.rows || !user.rows.length) res.status(204).json({ error: 'No existe el empleado en al base de datos' });
        const {
            ced_usu: cedula,
            nom_usu,
            ape_usu,
            ema_usu,
            pass_usu,
            add_usu,
            pho_usu,
        } = user.rows[0];
        const newQuery = `
            UPDATE users 
            SET 
                ced_usu = ${compare(cedula, req.body.ced_usu)}, 
                nom_usu = '${compare(nom_usu, req.body.nom_usu)}', 
                ape_usu = '${compare(ape_usu, req.body.ape_usu)}', 
                ema_usu = '${compare(ema_usu, req.body.ema_usu)}', 
                pass_usu = '${compare(pass_usu, req.body.pass_usu)}', 
                add_usu = '${compare(add_usu, req.body.add_usu)}', 
                pho_usu = ${compare(pho_usu, req.body.pho_usu)}
            WHERE ced_usu = ${ced_usu};
        `;
        const query = await queryDB(newQuery);
        res.json({
            message: 'Empleado modificado con exito!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

// Update employee vacuna
exports.updateEmployeeVacuna = async (req, res) => {
    try {
        const ced_usu = req.params['ced_usu'];
        const {
            vac_usu,
            vac_tip_usu,
            fec_vac_usu,
            num_dos_vac_usu
        } = req.body;
        const user = await queryDB(`
            SELECT * FROM users WHERE role = 'EMPLOYEE' AND ced_usu = '${ced_usu}'
        `);
        if (!user || !user.rows || !user.rows.length) res.status(204).json({ error: 'No existe el empleado en al base de datos' });
        if (!req.body.vac_usu || !req.body.vac_tip_usu || !req.body.fec_vac_usu || !req.body.num_dos_vac_usu) {
            res.status(400).json({
                message: 'Falta data relacionada a la vacuna del usuario, como la fecha, si lo esta o no, numero de dosis y el tipo de vacuna'
            });
        }
        const newQuery = `
            UPDATE users 
            SET 
                vac_usu = ${vac_usu},
                vac_tip_usu = '${vac_tip_usu}',
                fec_vac_usu = '${fec_vac_usu}',
                num_dos_vac_usu = ${num_dos_vac_usu}
            WHERE ced_usu = ${ced_usu};
        `;
        const query = await queryDB(newQuery);
        res.json({
            message: 'Vacuna agregada con exito!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};

// Post employees
exports.postEmployees = async (req, res) => {
    try {
        const { ema_usu, nom_usu, ape_usu, ced_usu } = req.body;

        if (!validateString(nom_usu) || !validateString(ape_usu) || !validateEmail(ema_usu) ||! validateNumber(ced_usu)) {
            res.status(400).json({
                message: 'Datos como nombre, apellido, email y cedula estan siendo ingresados de manera incorrecta'
            });
        }        
        //Se setea en un principio por como 'default' la constrasena del usuario, la cual
        //el mismo podra cambiar luego
        const user = await queryDB(`
        INSERT INTO users (role, ced_usu, nom_usu, ape_usu, ema_usu)
        VALUES 
        ('EMPLOYEE', ${ced_usu}, '${nom_usu}', '${ape_usu}', '${ema_usu}')`);
        res.json({ message: 'Empleado creado!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

//Delete employees
exports.deleteEmployee = async (req, res) => {
    try {
        const ced_usu = req.params['ced_usu'];
        const user = await queryDB(`
            SELECT * FROM users WHERE role = 'EMPLOYEE' AND ced_usu = '${ced_usu}'
        `);
        if (!user || !user.rows || !user.rows.length) res.status(204).json({ error: 'No existe el empleado en al base de datos' });
        const newQuery = `
            DELETE FROM users WHERE ced_usu = ${ced_usu}
        `;
        const query = await queryDB(newQuery);
        res.json({
            message: 'Empleado eliminado con exito!'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error });
    }
};