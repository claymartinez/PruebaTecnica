const formatoNombre = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Inserta espacio entre minúsculas y mayúsculas
    .toUpperCase(); // Convierte todas las letras a mayúsculas
};

export default formatoNombre;
