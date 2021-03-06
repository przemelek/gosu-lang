/*
 * Copyright 2014 Guidewire Software, Inc.
 */

package gw.lang.function;

public abstract class Function7 extends AbstractBlock implements IFunction7 {

  public Object invokeWithArgs(Object[] args) {
    if(args.length != 7) {
      throw new IllegalArgumentException("You must pass 7 args to this block, but you passed" + args.length);
    } else {
      //noinspection unchecked
      return invoke(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
  }

}
