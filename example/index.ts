// ------------------------------------------------------------------
// Syntax Matches
// ------------------------------------------------------------------
declare const Type: { Script: (...args: any[]) => any }
declare const t: { Script: (...args: any[]) => any }
declare const Script: (...args: any[]) => any
declare const s: (...args: any[]) => any

// ------------------------------------------------------------------
// Single Line
// ------------------------------------------------------------------
{
  const A = Type.Script('number[] | boolean')
  const B = Type.Script('number[] | boolean')
  const C = Type.Script('number[] | boolean')
}
// ------------------------------------------------------------------
// Single Line + Context
// ------------------------------------------------------------------
{
  const T = Type.Script('string')
  const A = Type.Script({ T }, 'number[] | T')
  const B = Type.Script({ T }, 'number[] | T')
  const C = Type.Script({ T }, 'number[] | T')
}
// ------------------------------------------------------------------
// Single Line + Options
// ------------------------------------------------------------------
{
  const T = Type.Script('string')
  const A = Type.Script({ T }, 'number[] | T', { decription: 'A' })
  const B = Type.Script({ T }, 'number[] | T', { decription: 'B' })
  const C = Type.Script({ T }, 'number[] | T', { decription: 'C' })
}
// ------------------------------------------------------------------
// Multi Line
// ------------------------------------------------------------------
const A = Type.Script(`{
  x: number
  y: number
  z: number
}`)

// ------------------------------------------------------------------
// Multi Line + Context
// ------------------------------------------------------------------

const B = Type.Script({ A }, `{
  x: A
  y: A
  z: A
}`)

// -------------------------------------
// Multi Line + Options
// -------------------------------------

const C = Type.Script({ A, B }, `{
  x: A
  y: B
}`, { 
  description: 'C'
})