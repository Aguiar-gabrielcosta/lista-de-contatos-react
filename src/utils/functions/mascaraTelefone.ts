const formataTelefone = (telefone: string): string => {
  return telefone.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3')
}

export const numerosTelefone = (telefone: string): string => {
  return telefone.replace(/[()-\s]/g, '')
}

export default formataTelefone
