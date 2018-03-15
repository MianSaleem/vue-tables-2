module.exports = function(h) {

  return (perpageValues, classes, id) => {

    return perpageValues.length > 1 ? <div class={classes.selectWrapper}>
    <select class={classes.select}
    name="limit"
    value={this.limit}
    on-change={this.setLimit.bind(this)}
    id={id}
    >
    {perpageValues}
    </select>
    </div>:'';
  }

}
