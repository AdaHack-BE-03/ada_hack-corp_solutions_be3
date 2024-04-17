

 import { User } from "../../infra/db/sequelize/models/index.js";

class IndicatorController {
  static async countByGroup(req, res) {
    try {
      const counts = {};

   
      console.log("Consulting and counting over_60...");
      counts.over_60 = await User.count({
        where: { over_60: true }
      });

     
      console.log("Consulting and counting gender...");
      counts.gender = await User.count({
        where: { gender: true }
      });

      console.log("Consulting and counting ethnicity...");
      counts.ethnicity = await User.count({
        where: { ethnicity: true }
      });

      console.log("Consulting and counting sexual_orientation...");
      counts.sexual_orientation = await User.count({
        where: { sexual_orientation: true }
      });

      console.log("Consulting and counting pcd...");
      counts.pcd = await User.count({
        where: { pcd: true }
      });

      console.log("Counts:", counts);
      res.json(counts);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default IndicatorController;








