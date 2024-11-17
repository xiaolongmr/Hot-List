import axios from 'axios';

export default async function handler(req, res) {
    const targetUrl = 'https://www.ebrun.com/api/getRefreshNewest';

    try {
        // 请求目标 API
        const response = await axios.get(targetUrl);

        // 将响应转发给前端
        res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有域访问
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(response.data);
    } catch (error) {
        console.error('代理请求失败:', error.message);
        res.status(500).json({ error: '代理服务器错误' });
    }
}
