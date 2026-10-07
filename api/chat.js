export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // لە هەنگاوی داهاتوودا AI API لێرە پەیوەست دەکەین
    return res.status(200).json({
      reply: "AriX AI وەرگرتی: " + message
    });

  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
}
