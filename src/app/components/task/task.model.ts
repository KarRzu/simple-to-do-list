export type Task = {
  title: string;
  description: string;
  taskPriority: 'High' | 'Moderate' | 'Low' | 'Critical';
  storyPoints: number;
};
