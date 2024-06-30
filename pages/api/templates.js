import { query } from '../../lib/db';

export default async function handler(req, res) {
    try {
        const templates = await query(`
            SELECT id, page_name, html, css FROM templates
        `);

        res.status(200).json(templates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
