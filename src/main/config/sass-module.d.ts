declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

// Pro webpack entender as extensoes do scss como classes