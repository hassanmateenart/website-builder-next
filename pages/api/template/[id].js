import { query } from '../../../lib/db';

export default async function handler(req, res) {
    const { id } = req.query;

    try {
        const template = await query(`
            SELECT html, css FROM templates WHERE id = ?
        `, [id]);

        res.status(200).json(template[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
