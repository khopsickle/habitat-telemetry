export function getStatusColor(status) {
  return (
    {
      operational: "green-600",
      maintenance: "yellow-500",
      standby: "gray-400",
    }[status] ?? "gray-800"
  );
}
