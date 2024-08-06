import { TRAKTEER_KEY } from '$env/static/private';
import { json } from "@sveltejs/kit";
import axios from 'axios';



export async function GET() {
    const apiUrl = `https://api.trakteer.id/v1/public/supports?limit=25`;
    const config = {
        headers: {
            'key': `${TRAKTEER_KEY}`
        }
    };
    const result = await axios.get(apiUrl, config);
    const jsonData = result.data.result.data;
    const datas = [];
    for (let i = 0; i < jsonData.length; i++) {
        datas.push({
            supporter_name: jsonData[i].supporter_name,
            support_message: jsonData[i].support_message
        });
    }
    return json(datas);

}