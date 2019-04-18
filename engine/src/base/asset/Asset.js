/*
 * Copyright 2018 WICKLETS LLC
 *
 * This file is part of Wick Engine.
 *
 * Wick Engine is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wick Engine is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Wick Engine.  If not, see <https://www.gnu.org/licenses/>.
 */

Wick.Asset = class extends Wick.Base {
    /**
     * Creates a new Wick Asset.
     * @param {string} filename - the filename of the asset
     */
    constructor (name) {
        super();

        this.name = name;
    }

    static _deserialize (data, object) {
        super._deserialize(data, object);
        object.name = data.name;
        return object;
    }

    serialize () {
        var data = super.serialize();
        data.name = this.name;
        return data;
    }

    get classname () {
        return 'Asset';
    }
}