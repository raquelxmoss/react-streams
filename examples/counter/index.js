import { mapTo } from "rxjs/operators"
import { action, handler, mapActions, streamProps } from "../../"

const Counter = streamProps(({ count }) => {
  const onInc = handler(mapTo(2))
  const onDec = handler(mapTo(-2))

  const count$ = mapActions(count, [
    action(onInc, num => count => count + num),
    action(onDec, num => count => count + num)
  ])

  return {
    count: count$,
    onInc,
    onDec
  }
})

export default () => (
  <Counter count={4}>
    {({ count, onInc, onDec }) => (
      <div>
        <div id="count">{count}</div>
        <button id="inc" onClick={onInc}>
          +
        </button>
        <button id="dec" onClick={onDec}>
          -
        </button>
      </div>
    )}
  </Counter>
)