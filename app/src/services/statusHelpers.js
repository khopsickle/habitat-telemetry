export const statusClasses = {
  operational: {
    text: "text-green-600",
    border: "border-green-600",
  },
  maintenance: {
    text: "text-yellow-500",
    border: "border-yellow-500",
  },
  standby: {
    text: "text-gray-400",
    border: "border-gray-400",
  },
};

export function getStatusClass(status, variant = "text") {
  return (
    statusClasses[status]?.[variant] ??
    (variant === "text" ? "text-gray-800" : "border-gray-800")
  );
}
