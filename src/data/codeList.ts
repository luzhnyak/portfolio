export const codeList = [
  {
    id: 1,
    user: "luzhnyak",
    dateCreate: "5 month ago",
    countStar: 3,
    code: `
function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
`.trim(),
  },
  {
    id: 2,
    user: "luzhnyak",
    dateCreate: "5 month ago",
    countStar: 1,
    code: `
export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}
`.trim(),
  },
  {
    id: 3,
    user: "luzhnyak",
    dateCreate: "4 month ago",
    countStar: 2,
    code: `
function scrollFunction() {
  if (document.body.scrollTop > 30 ||
    document.documentElement.scrollTop > 30) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}
`.trim(),
  },
  {
    id: 4,
    user: "luzhnyak",
    dateCreate: "2 month ago",
    countStar: 5,
    code: `
const modifiedChildren = React.Children.map(children, (child) =>
  React.cloneElement(child as React.ReactElement, {
    onClick: handleClickOpen,
  })
);
`.trim(),
  },
];
