import { query } from '../../lib/db';

export default async function handler(req, res) {
    console.log(req.body);
    const { name, html, css } = req.body;

    try {
        await query(`
            INSERT INTO templates (page_name, html, css)
            VALUES (?, ?, ?)
        `, [name, html, css]);

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
