      }
    } else if (args.length === 3) {
      const [strMod, dexMod, intMod] = args;
      this.strength += strMod;
      this.dexterity += dexMod;
      this.intelligence += intMod;
​
      const changes = [];
      if (strMod !== 0) changes.push(`strength ${strMod > 0 ? '+' : ''}${strMod}`);
      if (dexMod !== 0) changes.push(`dexterity ${dexMod > 0 ? '+' : ''}${dexMod}`);
      if (intMod !== 0) changes.push(`intelligence ${intMod > 0 ? '+' : ''}${intMod}`);
      this.eventLogs.push(`${displayName}: ${changes.join(', ')}`);
    }
  }
​
  characterInfo() {
    const best = this._getBestWeapon();
    return `${this.name}\nstr ${this.strength}\ndex ${this.dexterity}\nint ${this.intelligence}\n${best.display} ${best.damage} dmg`;
  }
​
  eventLog() {
    return this.eventLogs.join('\n');
  }
}
​
module.exports = Character;