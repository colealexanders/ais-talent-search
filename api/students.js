// api/students.js
import studentsData from '../data/students.json';

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=86400');
  res.json(studentsData);
}