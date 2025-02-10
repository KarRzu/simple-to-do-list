export type Task = {
  id: number;
  title: string;
  description: string;
  taskPriority: 'High' | 'Moderate' | 'Low' | 'Critical';
  storyPoints: number;
};
