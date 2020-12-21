export default {
  useCustomProperties: true,
  initialColorMode: 'light',
  colors: {
    text: '#101010',
    background: '#efefef',
    primary: '#000',
    secondary: '#242424',
    muted: '#d6d6d6',
    highlight: '#9f9f9f',
    gray: '#666',
    accent: '#101010',
    modes: {
      dark: {
        text: '#efefef',
        background: '#101010',
        primary: '#fff',
        secondary: '#dbdbdb',
        muted: '#292929',
        highlight: '#606060',
        gray: '#999',
        accent: '#e0e0e0',
      },
    },
  },
  fonts: {
    body: 'Inter',
    heading: 'Inter',
    monospace: 'Silom, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 300,
    heading: 400,
    display: 500,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      primary: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
      },
    },
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
    },
  },
  forms: {
    input: {
      borderRadius: 4,
      borderColor: 'secondary',
      borderStyle: 'solid',
      borderWidth: 1,
      '&:focus': {
        borderRadius: 4,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
      },
    },
    textarea: {
      borderRadius: 4,
      borderColor: 'secondary',
      borderStyle: 'solid',
      borderWidth: 1,
      '&:focus': {
        borderRadius: 4,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
      },
    },
  },
  buttons: {
    primary: {
      borderRadius: 4,
      borderColor: 'gray',
      borderStyle: 'solid',
      borderWidth: 1,
      cursor: 'pointer',
      color: 'secondary',
      bg: 'background',
      transition: '0.25s',
      transitionTimingFunction: 'ease-in',
      '&:hover': {
        color: 'text',
        borderColor: 'text',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    root: {
      transition: '0.25s',
      transitionTimingFunction: 'ease-in',
      blockquote: {
        margin: 0,
        padding: 2,
        fontSize: 1,
        borderRadius: 4,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        bg: 'muted',
        p: {
          fontSize: 1,
        },
      },
      Container: {
        p: 3,
      },
      h1: {
        variant: 'textStyles.display',
        fontSize: [5, 5, 6],
      },
      h2: {
        variant: 'textStyles.heading',
        fontSize: [4, 4, 5],
      },
      h3: {
        variant: 'textStyles.heading',
        fontSize: [3, 3, 4],
      },
      h4: {
        variant: 'textStyles.heading',
        fontSize: [2, 2, 3],
        a: {
          fontSize: [2, 2, 3],
        },
      },
      h5: {
        variant: 'textStyles.heading',
        fontSize: [2, 2, 2],
      },
      h6: {
        variant: 'textStyles.heading',
        fontSize: 1,
      },
      p: {
        fontFamily: 'body',
        fontSize: 3,
        lineHeight: 2,
        a: {
          fontSize: 3,
        },
      },
      a: {
        fontSize: 2,
        color: 'primary',
        textDecoration: 'none',
        transition: '0.25s',
        transitionTimingFunction: 'ease-in',
        cursor: 'pointer',
        '&:hover': {
          color: 'gray',
        },
      },
      pre: {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: 1,
        p: 3,
        color: 'text',
        bg: 'background',
        borderRadius: 4,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'auto',
        code: {
          fontFamily: 'Roboto Mono, monospace',
          fontSize: 1,
          color: 'text',
          bg: 'background',
          overflow: 'auto',
        },
      },
      code: {
        fontFamily: 'Roboto Mono, monospace',
        fontSize: 1,
        color: 'text',
        bg: 'muted',
        overflow: 'auto',
      },
      inlineCode: {
        fontFamily: 'Roboto Mono, monospace',
        color: 'secondary',
        bg: 'muted',
        px: 2,
      },
      ul: {
        listStyleType: 'square',
        fontSize: 1,
      },
      ol: {
        fontSize: 1,
      },
      li: {
        p: 2,
      },
      table: {
        width: '100%',
        my: 4,
        borderCollapse: 'separate',
        borderSpacing: 0,
        background: 'secondary',
        'th,td': {
          textAlign: 'center',
          py: '4px',
          pr: '4px',
          pl: 0,
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: 'muted',
          borderStyle: 'solid',
        },
      },
      th: {
        backgroundColor: 'muted',
        verticalAlign: 'middle',
        borderTopWidth: 0,
        borderWidth: 1,
      },
      td: {
        verticalAlign: 'middle',
        borderTopWidth: 0,
        borderWidth: 1,
      },
      hr: {
        border: 0,
        borderBottom: '1px solid',
        borderColor: 'text',
      },
    },
  },
}
